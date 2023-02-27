import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        max={60}
        step={5}
        disabled={!!activeCycle}
        min={5}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
