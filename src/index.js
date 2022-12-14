const regex = /\b(ipsum)+\b/g;
const str =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias reiciendis nihil facere reprehenderit laudantium inventore rem quisquam doloremque nobis ipsum perferendis, molestias ad quod beatae dolores iusto, eius eligendi ipsum?";

for (let match of str.matchAll(regex)) {
  console.log(Object.entries(match), "obj");
  console.log(match, "match");
}
