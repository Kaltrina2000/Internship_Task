interface Intern {
  name: string;
  age: number;
  skills: ("React" | "HTML" | "JS" | "Typescript" | string)[];
}
export enum Domain {
  Web = "Web",
  Connect = "Connect",
  Backend = "Backend",
}

interface Junior {
  name: string;
  age: number;
  skills: string[];
  date_of_promotion: Date;
  domain: Domain;
}
interface Company {
  Interns: Intern[];
  Juniors: Junior[];
  Country: string;
}
export { Company };
