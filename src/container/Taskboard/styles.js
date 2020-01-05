const styles = theme => ({
  taskboard: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  },
  shape: {
    width: "100px",
    backgroundColor: "red",
    color: theme.color.white,
    borderColor: "#ccc",
    padding: 20,
    margin: 10,
    borderRadius: 4
  }
})
export default styles
