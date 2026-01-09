const Userdetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Showing details of #{id}</h1>
    </div>
  );
};

export default Userdetails;
