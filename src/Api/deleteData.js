export const deleteData = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    const data = await response.json();
    throw new Error(
      `API request failed with http status code ${response.status} because '${data.errors[0].message}'`
    );
  }

  return data;
};
