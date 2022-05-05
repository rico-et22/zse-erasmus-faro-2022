import * as React from "react";
import StudentListClass from "../../types/StudentListClass";

interface Props {
  list: StudentListClass[];
}

export default function StudentList({ list }: Props) {
  const formattedList = React.useMemo(() => {
    const returnedList: {
      name: string;
      className: string
    }[] = []
    list.forEach(singleClass => {
      singleClass.students.forEach(student => {
        returnedList.push({
          name: student,
          className: singleClass.className
        })
      });
    })
    return returnedList
  }, [list])

  return (
    <>
          <div
            className="bg-white rounded-lg shadow mb-5"
          >
            {formattedList.map((student, index) => (
              <div
                key={`${student.className}-${index}`}
                className="py-2 px-3 even:bg-gray-50 last:rounded-b-lg"
              >
                <span className="font-medium">{student.name}</span> - {student.className}
              </div>
            ))}
          </div>
    </>
  );
}
