export const styles = theme => ({
  modalContainer: {
    position: "absolute",
    width: "50%",
    background: "#fff !important",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 4,
    paddingBottom: 10
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.color.secondary,
    color: theme.color.white,
    padding: "0 20px"
  },
  modalBottom: {
    padding: "10px 20px"
  },
  closeIcon: {
    cursor: "pointer"
  }
})
