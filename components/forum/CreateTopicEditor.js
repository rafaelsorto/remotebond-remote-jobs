import React from "react"
import dynamic from "next/dynamic"
import { Controller } from "react-hook-form"

import "react-quill/dist/quill.snow.css"

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const CreateTopicEditor = ({
  control,
  inputError,
  modules,
  formats,
  inputName,
}) => {
  return (
    <Controller
      name={inputName}
      control={control}
      render={(props) => {
        return (
          <QuillNoSSRWrapper
            modules={modules}
            value={props.value}
            onChange={props.onChange}
            formats={formats}
            theme="snow"
            className={`mt-1 form-input border ${
              !inputError.description
                ? "border-gray-300 focus:border-blue-300"
                : "border-red-300 focus:border-red-300"
            }  rounded-md shadow-sm`}
          />
        )
      }}
    />
  )
}

export default CreateTopicEditor
