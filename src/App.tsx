import { Header } from './components/header'
import './components/global.css'
import { Body } from './components/body'
import { Footer } from './components/footer'

export function App() {

  type search = {
    id: number,
    name: string,
    url: string
}[]

const images: search = [
    {
        id: 1,
        name: "",
        url: ""
    },
    {
        id: 2,
        name: "",
        url: ""
    },
    {
        id: 3,
        name: "",
        url: ""
    },
    {
        id: 4,
        name: "",
        url: ""
    },
    {
        id: 5,
        name: "",
        url: ""
    },
    {
        id: 6,
        name: "",
        url: ""
    },
    {
        id: 7,
        name: "",
        url: ""
    },
    {
        id: 8,
        name: "",
        url: ""
    },
    {
        id: 9,
        name: "",
        url: ""
    },
    {
        id: 10,
        name: "",
        url: ""
    },
    {
        id: 11,
        name: "",
        url: ""
    },
    {
        id: 12,
        name: "",
        url: ""
    }
]

  return(
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}