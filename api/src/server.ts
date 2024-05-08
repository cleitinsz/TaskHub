import app from "./app";

export function initServer(port?: number) {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}
const port = Number(process.env.PORT) || 3000;
initServer(3000);
