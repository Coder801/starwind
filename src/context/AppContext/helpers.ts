export const fetchPluginList = async () => {
  try {
    const response = await fetch("/api/plugins");
    return await response.json();
  } catch (error) {
    return error;
  }
};
