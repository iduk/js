import { useRouter } from "next/router"

function ActiveLink({ children, href, className }) {
  const router = useRouter()
  const style = {
    borderColor: router.pathname === href ? "inherit" : "",
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style} className={className}>
      {children}
    </a>
  )
}

export default ActiveLink
