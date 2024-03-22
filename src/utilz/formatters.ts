import { format, formatDistanceToNow, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

// const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
// const publishedDateRelativeToNow =

export const dateDistanceToNow = (date: Date) =>
  formatDistanceToNow(date, { locale: ptBR, addSuffix: true })

export const dateFormat = (date: Date) => {
  console.log(date)
  return format(date, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
}

export const dateISO = (date: Date) => formatISO(date)
