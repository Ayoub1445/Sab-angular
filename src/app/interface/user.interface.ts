// j'ai fait la creatio de cette interface pour faire fonctionner les valeur user.id et user.name ... sur html firstCompo

export class interfaceUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    // Vous pouvez ajouter d'autres propriétés ici
  };
}
