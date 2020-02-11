export const styles = theme => ({
  drawerPaper: {
    width: 250,
    maxWidth: 250,
    zIndex: 10,
    height: "100%",
    position: "absolute",
    top: 64
  },

  menuLink: {
    textDecoration: "none",
    color: theme.text.defaultTextColor
  },

  menuLinkActive: {
    "&>div": {
      backgroundColor: theme.color.gray
    }
  }
})
