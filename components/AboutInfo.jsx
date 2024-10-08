import React from "react";

const AboutInfo = ({about}) => {
  return (
    <div className="max-w-[620px] mx-auto xl:mx-0 bg-[#232329] p-6 rounded-xl">
      <pre className="text-white overflow-x-auto">
        <code className="font-">
          {`{\n${about.info.map((item, index) => `  "${item.fieldName}": "${item.fieldValue}"${index !== about.info.length - 1 ? ',' : ''}`).join('\n')}\n}`}
        </code>
      </pre>
    </div>
  );
};
export default AboutInfo;