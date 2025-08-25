import jsImg from "~/assets/images/competences/js.png";
import tsImg from "~/assets/images/competences/ts.png";
import nodeJsImg from "~/assets/images/competences/nodejs.png";
import expressJsImg from "~/assets/images/competences/expressjs.png";
import reactImg from "~/assets/images/competences/react.png";
import angularImg from "~/assets/images/competences/angular.png";
import vueJsImg from "~/assets/images/competences/vuejs.png";
import openAiImg from "~/assets/images/competences/openai.png";
import tailwindCssImg from "~/assets/images/competences/tailwindcss.png";
import bulmaImg from "~/assets/images/competences/bulma.png";
import pythonImg from "~/assets/images/competences/python.png";
import arduinoImg from "~/assets/images/competences/arduino.png";
import javaImg from "~/assets/images/competences/java.png";
import kotlinImg from "~/assets/images/competences/kotlin.png";
import dartImg from "~/assets/images/competences/dart.png";
import flutterImg from "~/assets/images/competences/flutter.png";
import firebaseImg from "~/assets/images/competences/firebase.png";
import postgressqlImg from "~/assets/images/competences/postgresql.png";
import mssqlImg from "~/assets/images/competences/mssql.png";
import mysqlImg from "~/assets/images/competences/mysql.png";
import francaisImg from "~/assets/images/competences/quebec.png";
import anglaisImg from "~/assets/images/competences/canada.png";
import raspImg from "~/assets/images/competences/rasp.png";
import reactNativeImg from "~/assets/images/competences/reactnative.png";
import riscvImg from "~/assets/images/competences/riscv.png";
import htmlImg from "~/assets/images/competences/html.png";
import p5JsImg from "~/assets/images/competences/p5js.png";
import { Competences, CompetenceType, type Competence } from "~/types";

export const competencesMap: Record<Competences, Competence> = {
  [Competences.HTML5]: {
    title: "HTML5",
    imageUrl: htmlImg,
    type: CompetenceType.Langage,
  },
  [Competences.JavaScript]: {
    title: "JavaScript",
    imageUrl: jsImg,
    type: CompetenceType.Langage,
  },
  [Competences.TypeScript]: {
    title: "TypeScript",
    imageUrl: tsImg,
    type: CompetenceType.Langage,
  },
  [Competences.Java]: {
    title: "Java",
    imageUrl: javaImg,
    type: CompetenceType.Langage,
  },
  [Competences.Python]: {
    title: "Python",
    imageUrl: pythonImg,
    type: CompetenceType.Langage,
  },
  [Competences.Dart]: {
    title: "Dart",
    imageUrl: dartImg,
    type: CompetenceType.Langage,
  },
  [Competences.RISC_V]: {
    title: "RISC-V",
    imageUrl: riscvImg,
    type: CompetenceType.Langage,
  },
  [Competences.React]: {
    title: "React",
    imageUrl: reactImg,
    type: CompetenceType.Web,
  },
  [Competences.Angular]: {
    title: "Angular",
    imageUrl: angularImg,
    type: CompetenceType.Web,
  },
  [Competences.VueJs]: {
    title: "Vue.js",
    imageUrl: vueJsImg,
    type: CompetenceType.Web,
  },
  [Competences.NodeJs]: {
    title: "Node.js",
    imageUrl: nodeJsImg,
    type: CompetenceType.Web,
  },
  [Competences.ExpressJs]: {
    title: "Expressjs",
    imageUrl: expressJsImg,
    type: CompetenceType.Web,
  },
  [Competences.P5js]: {
    title: "p5.js",
    imageUrl: p5JsImg,
    type: CompetenceType.Web,
  },
  [Competences.TailwindCSS]: {
    title: "Tailwind CSS",
    imageUrl: tailwindCssImg,
    type: CompetenceType.Web,
  },
  [Competences.Bulma]: {
    title: "Bulma",
    imageUrl: bulmaImg,
    type: CompetenceType.Web,
  },
  [Competences.Flutter]: {
    title: "Flutter",
    imageUrl: flutterImg,
    type: CompetenceType.Mobile,
  },
  [Competences.Kotlin]: {
    title: "Kotlin",
    imageUrl: kotlinImg,
    type: CompetenceType.Mobile,
  },
  [Competences.ReactNative]: {
    title: "React Native",
    imageUrl: reactNativeImg,
    type: CompetenceType.Mobile,
  },
  [Competences.Firebase]: {
    title: "Firebase",
    imageUrl: firebaseImg,
    type: CompetenceType.Bd,
  },
  [Competences.PostgreSQL]: {
    title: "PostgreSQL",
    imageUrl: postgressqlImg,
    type: CompetenceType.Bd,
  },
  [Competences.MSSQL]: {
    title: "MSSQL",
    imageUrl: mssqlImg,
    type: CompetenceType.Bd,
  },
  [Competences.MySQL]: {
    title: "MySQL",
    imageUrl: mysqlImg,
    type: CompetenceType.Bd,
  },
  [Competences.OpenAI]: {
    title: "OpenAI",
    imageUrl: openAiImg,
    type: CompetenceType.AiIot,
  },
  [Competences.Arduino]: {
    title: "Arduino",
    imageUrl: arduinoImg,
    type: CompetenceType.AiIot,
  },
  [Competences.RaspberryPi]: {
    title: "Raspberry Pi",
    imageUrl: raspImg,
    type: CompetenceType.AiIot,
  },
  [Competences.Français]: {
    title: "Français",
    imageUrl: francaisImg,
    type: CompetenceType.Langue,
  },
  [Competences.Anglais]: {
    title: "Anglais",
    imageUrl: anglaisImg,
    type: CompetenceType.Langue,
  },
};
