import React from 'react'

export const Checkbox = ({ label }: { label: string } ) => {
  const [value, setValue] = React.useState(false)

  //se for passar a funcao separada. Se passar direto no template na precisa tipar a funcao
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked)
  }

  return (
    <label style={{
      padding: '0.5rem',
      border: value ? '2px solid #8d2' : '2px solid #d22',
    }}>
      <input type="checkbox" checked={value} onChange={(event) => setValue(event.currentTarget.checked)} />
      {label}
    </label>
  )
}
