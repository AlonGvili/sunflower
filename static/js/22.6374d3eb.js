(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./node_modules/_raw-loader@3.1.0@raw-loader/dist/cjs.js!./examples/sunflower-antd-form/Example1.tsx":function(n,e,r){"use strict";r.r(e),e.default="import React from 'react';\nimport { useForm } from 'sunflower-antd';\nimport { Input, Button, Form, Spin } from 'antd';\n\n\nexport default Form.create()(props => {\n  const { form } = props;\n  const { formProps, formValues, formResult, formLoading } = useForm({\n    form,\n    async submit({ username, email }) {\n      console.log('submit')\n      await new Promise(r => setTimeout(r, 1000));\n      console.log('fewfew')\n      return 'ok';\n    },\n  });\n  return <div>\n    <p>submit: username {formValues.username} email {formValues.email}</p>\n    <p>result: {formResult}</p>\n    <p>formLoading: {formLoading && <Spin />}</p>\n    <Form layout=\"inline\" {...formProps}>\n      <Form.Item label=\"Username\">\n        {\n          form.getFieldDecorator('username', {\n            rules: [\n              { required: true, message: 'Please input username' },\n            ]\n          })(\n            <Input placeholder=\"Username\" />\n          )\n        } \n      </Form.Item>\n\n      <Form.Item label=\"Email\">\n        {\n          form.getFieldDecorator('email', {\n            rules: [\n              { \n                required: true,\n                message: 'Please input email',\n                type: 'email',\n              },\n            ]\n          })(\n            <Input placeholder=\"Email\" />\n          )\n        } \n      </Form.Item>\n\n      <Form.Item>\n        <Button onClick={() => form.resetFields()}>\n          Reset\n        </Button>\n      </Form.Item>\n\n      <Form.Item>\n        <Button type=\"primary\" htmlType=\"submit\">\n          Search\n        </Button>\n      </Form.Item>\n    </Form>\n\n  </div>\n});\n"}}]);