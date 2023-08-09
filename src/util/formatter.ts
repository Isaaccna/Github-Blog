import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function dateFormatterTitle(date: string) {
  const formattedTitle = format (new Date(date), 
  "d/LL/yyyy 'às' HH:mm'h'"
  )
  return formattedTitle
}

export function dateFormatCreatedAt(date: string) {
  const formattedDate = formatDistanceToNow(new Date(date), {
    locale: ptBr,
    addSuffix: true
  })

  return formattedDate;
}