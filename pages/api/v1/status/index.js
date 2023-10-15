function status(request, response) {
  response.status(200).json({ status: "okay" });
}

export default status;
