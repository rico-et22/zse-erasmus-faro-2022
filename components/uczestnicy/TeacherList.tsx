import * as React from "react";
import TeacherListItem from "../../types/TeacherListItem";

interface Props {
  list: TeacherListItem[];
}

export default function TeacherList({ list }: Props) {
  return (
    <>
      <div className="bg-white rounded-lg shadow mb-5 w-full">
        {list.map((teacher, index) => (
          <div
            key={`${teacher.name}-${index}`}
            className="py-2 px-3 even:bg-gray-50 last:rounded-b-lg w-full"
          >
            <span className="font-medium">{teacher.name}</span>
            {teacher.occupation ? ` - ${teacher.occupation}` : ""}
          </div>
        ))}
      </div>
    </>
  );
}
