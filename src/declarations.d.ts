declare module "*.scss";
declare module "*.css";
declare module "@/myprofile" {
  import type {ProfileData} from '@/types/profile'
  const profile: ProfileData
  export default profile
}
