import { JourneyEvent } from "@/types/content";
import { mediaRegistry } from "./media";

export const journeyEvents: JourneyEvent[] = [
  {
    year: "२०२४",
    title: "विधानसभा निवडणूक",
    description: "धाराशिव-कळंब मतदारसंघातून सलग दुसऱ्यांदा विधानसभेवर निवड.",
    image: mediaRegistry.journey.election2024,
    sources: [{ label: "Election Commission of India", type: "official" }],
    verification: "verified"
  },
  {
    year: "२०१९",
    title: "विधानसभेत प्रवेश",
    description: "धाराशिव-कळंब मतदारसंघातील जनतेने दाखवलेल्या विश्वासामुळे पहिल्यांदाच विधानसभेत निवड.",
    image: mediaRegistry.journey.election2019,
    sources: [{ label: "Maharashtra Legislative Assembly", type: "official" }],
    verification: "verified"
  },
  {
    year: "२०१७",
    title: "शिवसेना जिल्हाप्रमुख",
    description: "उस्मानाबाद (धाराशिव) जिल्ह्याचे शिवसेना जिल्हाप्रमुख म्हणून नियुक्ती.",
    image: mediaRegistry.journey.uddhavThackeray,
    sources: [{ label: "News Reports", type: "news" }],
    verification: "verified"
  },
  {
    year: "२०१७",
    title: "जि.प. सदस्य",
    description: "उस्मानाबाद जिल्हा परिषद सदस्य म्हणून निवड.",
    image: mediaRegistry.journey.zpPresident2017,
    sources: [{ label: "Maharashtra State Election Commission", type: "official" }],
    verification: "verified"
  },
  {
    year: "२००७",
    title: "राजकीय प्रवासाची सुरुवात",
    description: "येडशी गावचे सरपंच म्हणून सलग १० वर्षे काम. येथूनच त्यांच्या राजकीय आणि सामाजिक प्रवासाला सुरुवात झाली.",
    image: mediaRegistry.journey.sarpanch2007,
    sources: [{ label: "News Reports", type: "news" }],
    verification: "verified"
  }
];
