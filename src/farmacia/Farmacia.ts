import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Farmacia {
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

export { Farmacia }