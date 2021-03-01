const secToTimeFormat = (seconds: number) => {
  const dateObj = new Date(seconds * 1000)

  const min = dateObj.getUTCMinutes()
  const sec = dateObj.getSeconds()

  const time =
    min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
  return time
}
export default secToTimeFormat
