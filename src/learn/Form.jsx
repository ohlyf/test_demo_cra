import React from "react";

class Form extends React.Component {
  state = {
    formData: {},
  };
  /* 用于提交表单数据 */
  submitForm = (cb) => {
    cb({ ...this.state.formData });
  };
  /* 获取重置表单数据 */
  resetForm=()=>{
    const {formData}=this.state
    Object.keys(formData).forEach(key=>{
      formData[key]=''
    })
    this.setState({formData})
  }
  /* 设置表单数据层 */
  setValue=(name,value)=>{
    this.setState({
      formData:{
        ...this.state.formData,
        [name]:value
      }
    })
  }
  render(){
    const {children}=this.props
    const renderChildren=[]
    React.Children.forEach(children,(child)=>{
      const {name}=child.props
      /* 克隆FormItem节点，混入改变表单单元项的方法 */
      const Children=React.cloneElement(child,{
        key:name,
        handleChange:this.setValue,
        value:this.state.formData[name]
      },child.props.children)
      renderChildren.push(Children)
    })
    return renderChildren
  }
}

/* 增加组件类型type */
Form.displayName='form'


/* FormItem */
function FormItem(props){
  const {children,name,handleChange,value,label}=props
  const onChange=(value)=>{
    /* 通知上一次value已经改拜年 */
    handleChange(name,value)
  }
  return (
    <div className="form">
      <span className="label">{label}</span>
      {
        React.isValidElement(children)&&children.type.displayName==='input'?React.cloneElement(children,{onChange,value}):null
      }
    </div>
  )
}

FormItem.displayName='formItem'

/* Input */
function Input({onChange,value}){
  return <input className="input" onChange={(e)=>onChange&&onChange(e.target.value)} value={value}/>
}

Input.displayName='input'