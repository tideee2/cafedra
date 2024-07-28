interface Props {
  params: {
    publicationId: number
  }
}
export default function PublicationAdminPage({ params }: Props) {
  return (
    <>
      <h1>PublicationAdminPage {params.publicationId}</h1>
    </>
  )
}
