import { JourneyEvent } from "@/types/content";
import { mediaRegistry } from "./media";

export const journeyEvents: JourneyEvent[] = [
  {
    year: "२०२४",
    title: "विधानसभा निवडणूक",
    description: "धाराशिव-कळंब मतदारसंघातून सलग दुसऱ्यांदा विधानसभेवर निवड.",
    image: mediaRegistry.journey.election2024,
    verification: "verified"
  },
  {
    year: "२०१९",
    title: "पहिल्यांदा विधानसभेत",
    description: "धाराशिव-कळंब मतदारसंघातील जनतेने दाखवलेल्या विश्वासामुळे पहिल्यांदाच विधानसभेत प्रवेश.",
    image: mediaRegistry.journey.election2019,
    verification: "verified"
  },
  {
    year: "२०१७",
    title: "जि.प. अध्यक्ष",
    description: "उस्मानाबाद जिल्हा परिषदेचे अध्यक्ष म्हणून निवड. जिल्ह्याच्या ग्रामीण विकासाला गती दिली.",
    image: mediaRegistry.journey.zpPresident2017,
    verification: "verified"
  },
  {
    year: "२०१२",
    title: "जि.प. सदस्य",
    description: "उस्मानाबाद जिल्हा परिषद सदस्य म्हणून निवड.",
    image: mediaRegistry.journey.zpMember2012,
    verification: "verified"
  },
  {
    year: "२००७",
    title: "राजकीय प्रवासाची सुरुवात",
    description: "येडशी गावचे सरपंच म्हणून राजकीय आणि सामाजिक प्रवासाला सुरुवात.",
    image: mediaRegistry.journey.sarpanch2007,
    verification: "verified"
  }
];
