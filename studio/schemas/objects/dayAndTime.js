import TimeInput from '../../components/TimeInput.js'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const verifyInput = dayAndTime => {
  const {day, opensAt, closesAt} = dayAndTime
  if (!day) {
    return 'Please select a day'
  }
  if (!opensAt) {
    return 'Please select a opensAt'
  }
  if (!closesAt) {
    return 'Please select a closesAt'
  }
  return true
}

const outgoingValue = time => {
  const {hours, minutes} = incomingValues(time)
  let isPM = hours > 12
  return `
  ${`${isPM ? Math.floor(hours % 12) : hours}`.padStart(2, '0')}:${`${minutes}`.padStart(2, '0')} ${
  isPM ? 'PM' : 'AM'
}`
}

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
const format = timeString => {
  return outgoingValue(timeString)
}

export default {
  title: 'Day and Time',
  name: 'dayAndTime',
  type: 'object',

  validation: Rule => Rule.custom(verifyInput),

  fields: [
    {
      title: 'Day',
      name: 'day',
      type: 'string',
      description: 'select day of week',
      options: {
        list: days,
        layout: 'radio'
      }
    },
    {
      title: 'Opens at',
      name: 'opensAt',
      type: 'string',
      description: 'select opening time',
      inputComponent: TimeInput
    },
    {
      title: 'Closes at',
      name: 'closesAt',
      type: 'string',
      description: 'Select closing time',
      inputComponent: TimeInput
    }
  ],

  preview: {
    select: {
      day: 'day',
      opensAt: 'opensAt',
      closesAt: 'closesAt'
    },
    prepare ({day, opensAt, closesAt}) {
      return {
        title: day,
        subtitle: `${format(opensAt)} — ${format(closesAt)}`
      }
    }
  }
}
