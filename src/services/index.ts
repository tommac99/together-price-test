export const GetData = async () => {
  let response = await fetch("data.json");
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};
