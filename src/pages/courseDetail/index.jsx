import { standardizedCurricula, whyjoin } from "../../constants";
import { useParams } from "react-router-dom";
import Landpage from "./landpage";
import Outcome from "./outcome";
import Modules from "./module";

export default function CoursePage({ params }) {
  const { course } = useParams();
  let currentCourse;
  if (course === "mean-full-stack-development") {
    currentCourse = standardizedCurricula.courses.meanStack;
  } else if (course === "mern-full-stack-development") {
    currentCourse = standardizedCurricula.courses.mernStack;
  } else if (course === "cross-platform-mobileapp-development-with-flutter") {
    currentCourse = standardizedCurricula.courses.flutter;
  } else if (course === "python-django-full-stack") {
    currentCourse = standardizedCurricula.courses.python;
  } else if (course === "mastering-database-administration-dba") {
    currentCourse = standardizedCurricula.courses.databaseAdministration;
  } else if (course === "diploma-in-cyber-security-1-year") {
    currentCourse = standardizedCurricula.courses.cyberSecurity;
  } else if (course === "dotnet-full-stack-development") {
    currentCourse = standardizedCurricula.courses.dotNetFullStack;
  } else if (course === "dotnet-back-end-developer") {
    currentCourse = standardizedCurricula.courses.dotNetBackend;
  }
  return (
    <>
      <Landpage currentCourse={currentCourse} />
      {/* <Modules currentCourse={currentCourse} /> */}
      <Outcome currentCourse={currentCourse} />
    </>
  );
}
