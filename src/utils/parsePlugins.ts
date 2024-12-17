import fs from "fs";
import path from "path";

type PluginInfo = {
  name: string;
  path: string;
  description: string;
};

export const parsePlugins = (pluginsDir: string): PluginInfo[] => {
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
