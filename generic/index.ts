import { Repository } from "./Repository";
import { Developer } from "./developer";
import { Company } from "./company";
import { ProgrammingLanguage } from "../abstract2/programmingLanguage";

const repo1 = new Repository<Developer>();
const repo2 = new Repository<Company>();

const lang1 = new ProgrammingLanguage("1", "JavaScript", "High Level");
const lang2 = new ProgrammingLanguage("2", "TypeScript", "High Level");

repo1.add(new Developer("1", "John", [lang1]));
repo1.add(new Developer("2", "Jane", [lang2]));

repo2.add(new Company("1", "Company1", []));
repo2.add(new Company("2", "Company2", []));

console.log(repo1.getAll());
console.log(repo2.getAll());

console.log(repo1.getById("1"));
console.log(repo2.getById("2"));

repo1.update(new Developer("1", "John", [lang1]));
// repo2.update(new Company("1", "Company1", []));

console.log(repo1.getAll());
console.log(repo2.getAll());

repo1.delete("1");
repo2.delete("2");

console.log(repo1.getAll());
console.log(repo2.getAll());