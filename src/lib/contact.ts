export const WHATSAPP_NUMBER = '5511991867005'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = whatsappLink('Olá Daniel! Vi seu portfólio e quero conversar sobre um projeto.')
