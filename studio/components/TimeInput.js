import React from 'react'
import {withDocument} from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'

const incomingValues = value => {
  if (!value) {
    return {
      hours: 12,
      minutes: 0
    }
  }

  const [hours, minutes] = value.split(':')

  return {
    hours: Number(hours),
    minutes: Number(minutes)
  }
}

const createPatchForm = value => PatchEvent.from(value === '' ? unset() : set(value))

function TimeInput ({type, value, onChange}) {
  const timeInput = React.useRef()

  /* function focus () {
    return timeInput.current.focus()
  } */
  // const {hours, minutes} = incomingValues(value)

  function handleTimeChange (e) {
    const {value: inputValue} = e.target

    onChange(createPatchForm(inputValue))
  }

  return (
    <>
      <FormField label={type.title} description={type.description}>
        {/* <Timepicker
        hours={hours}
        minutes={minutes}
        onChange={handleTimeChange}
        ref={element => (timeInput.current = element)}
      /> */}
        <input
          type='time'
          name=''
          id=''
          value={value}
          ref={timeInput}
          onChange={handleTimeChange}
        />
      </FormField>
    </>
  )
}

export default withDocument(TimeInput)
