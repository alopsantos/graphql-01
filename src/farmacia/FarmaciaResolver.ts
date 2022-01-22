import { Arg, Field, InputType, Resolver, Mutation, Query } from "type-graphql";
import { Farmacia } from "./Farmacia";

import FarmaciaSchema from "./FarmaciaSchema";

@InputType()
class FarmaciaInput {
  @Field()
  _id: String;

  @Field()
  city: String;

  @Field()
  email: String;
  @Field()
  lat: String;
  
  @Field()
  lng: String;
  
  @Field()
  name: String;
  
  @Field()
  neighborhood: String;
  
  @Field()
  phone: String;
  
  @Field()
  street: String;
  
  @Field()
  urllogo: String;
  
  @Field()
  whatsapp: String;
  
  @Field()
  zipcode: Number;
}

@Resolver()
class FarmaciaResolver {
  @Mutation(() => Farmacia)
  async addVideo(@Arg("farmaciaInput") farmaciaInput: FarmaciaInput) {
    const farmacia = await FarmaciaSchema.create(FarmaciaInput);
    return farmacia;
  }

  @Query(() => [Farmacia])
  async farmacias() {
    const farmacias = await FarmaciaSchema.find();
    return farmacias;
  }
}

export { FarmaciaResolver };
