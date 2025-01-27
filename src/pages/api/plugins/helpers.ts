import fs from "fs";
import path from "path";
import { has, merge } from "lodash";

type PluginInfo = {
  name: string;
  path: string;
  framework: string;
  description: string;
};

type Dependencies = {
  [key: string]: string;
};

const getBaseFramework = (
  dependencies: Dependencies = {},
  devDependencies: Dependencies = {}
) => {
  const allDependencies = merge(dependencies, devDependencies);

  if (has(allDependencies, "react")) {
    return `React version: ${allDependencies.react}`;
  } else if (has(allDependencies, "@angular/core")) {
    return `Angular version: ${allDependencies["@angular/core"]}`;
  } else if (has(allDependencies, "vue")) {
    return `Vue version: ${allDependencies.vue}`;
  } else {
    return "Framework not found in package.json";
  }
};

export const parsePlugins = (pluginsDir = "./plugins"): PluginInfo[] => {
  const result: PluginInfo[] = [];

  const pluginFolders = fs.readdirSync(pluginsDir);

  for (const folder of pluginFolders) {
    const pluginPath = path.join(pluginsDir, folder);

    if (fs.statSync(pluginPath).isDirectory()) {
      const packageJsonPath = path.join(pluginPath, "package.json");

      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, "utf-8")
          );

          if (packageJson.name) {
            result.push({
              name: packageJson.name,
              description: packageJson.description || "",
              framework: getBaseFramework(
                packageJson.dependencies,
                packageJson.devDependencies
              ),
              path: pluginPath,
            });
          }
        } catch (err) {
          console.error(`Parsing file error ${packageJsonPath}:`, err);
        }
      }
    }
  }

  return result;
};
