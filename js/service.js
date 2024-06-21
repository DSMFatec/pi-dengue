export const getInfoDengueData = async () => {
  const response = await fetch("https://api-dengue-pi.onrender.com/");

  const data = await response.json();

  return data;
};

export const signToNewsletter = async (email) => {
  const searchParams = new URLSearchParams({
    email,
  }).toString();

  const response = await fetch(
    `https://api-dengue-pi.onrender.com/newsletter?${searchParams}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  return data;
};
