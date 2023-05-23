class Component {
  constructor(props) {
    this.props = props;
    //  - Validation des propriétés passées au composant
    //  - Utilisation du type_checker
    //  - version minimum: 3
    //  - exemples cas d'utilisation: Vérifier les données en entrée de constructeur
  }

  shouldUpdate(newProps) {
    // compare newProps avec les oldProps
    for (const prop in newProps) {
      if (
        newProps.hasOwnProperty(prop) &&
        (!this.props.hasOwnProperty(prop) ||
          this.props[prop] !== newProps[prop])
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    //  - si `render` invoque d'autres composants, le composant courant appelle la fonction `display(compProps)` des sous-composants
    //  utilisation de generateElement ici?
  }

  display() {
    //  display appelle la méthode `shouldUpdate()` du composant courant
    //  - si shouldUpdate
    //      - appelle la fonction `render` du composant
    //  - le résultat de `display` est ajouté au DOM sous le noeud parent
    const shouldUpdate = this.shouldUpdate();
    if (shouldUpdate) {
      const element = this.render();
      parentNode.appendChild(element);
    }
  }
}
