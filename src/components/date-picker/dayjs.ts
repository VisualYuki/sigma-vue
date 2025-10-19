import dayjs, {type Dayjs} from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(updateLocale, {weekStart: 1})
dayjs.extend(weekday)

export {dayjs, type Dayjs}
