declare module "*.png";
declare module "*.jpg";
declare module "*.gif" {
  const value: string;
  export default value;
}
