import { VelocityScroll } from "../../@/components/magicui/scroll-based-velocity";

export default function Intrested () {
  return (
    <div className="h-[100vh] flex items-center">
        <VelocityScroll
      text="WebDevelopmentMobileDevelopment&PersonalityDevelopment"
      default_velocity={3}
      className="font-display text-center text-4xl font-bold text-gray-500 tracking-[-0.02em] drop-shadow-sm p-8 md:text-7xl md:leading-[5rem]"
    />
    </div>
  );
}
