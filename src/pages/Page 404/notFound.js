const { div, p, img } = van.tags;

// Importing Images
// import { greenSquare } from "../../../public/images/page 404/green-square.svg"

export const NotFoundPage = () => {
  const imageUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkzIiBoZWlnaHQ9IjM5MyIgdmlld0JveD0iMCAwIDM5MyAzOTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMTU0LjE0OSIgeT0iMC42OTExMzciIHdpZHRoPSIyODMiIGhlaWdodD0iMjgzIiByeD0iNjkuNSIgdHJhbnNmb3JtPSJyb3RhdGUoMzIuNzk5OSAxNTQuMTQ5IDAuNjkxMTM3KSIgc3Ryb2tlPSIjMUE5NDAwIi8+PHJlY3QgeD0iMTYwLjU5MSIgeT0iMzMuMTAxMSIgd2lkdGg9IjIzNi4yNzUiIGhlaWdodD0iMjM2LjI3NSIgcng9IjcwIiB0cmFuc2Zvcm09InJvdGF0ZSgzMi43OTk5IDE2MC41OTEgMzMuMTAxMSkiIGZpbGw9IiMxQTk0MDAiLz48L3N2Zz4="
  
  return div(
    { class: "flex justify-between px-10 w-screen h-screen" },
    div(
      { class: "flex flex-col items-center justify-center mx-auto" },
      p(
        { class: "font-bold text-2xl text-orange-600" },
        "404"
      ),
      p(
        { class: "font-bold mt-20" },
        "Oops!"
      ),
      p(
        { class: "" },
        "We're sorry,",
        "The page you were looking for doesn't exist anymore."
      )
    ),
    div(
      { class: "" },
      img(
        { src: imageUrl, alt: "Green Square" }
      ),
      img(
        { src: imageUrl, alt: "Green Square" }
      )
    )
  )
}