import PocketBase from "pocketbase";

export const client = new PocketBase(process.env.REACT_APP_API_URL);
client.autoCancellation(false);

// get hero
export async function getHero() {
  return await client.collection("hero").getFirstListItem("status = true");
}

// get companies
export async function getCompanies() {
  return await client.collection("companies").getFullList();
}

// getCompany
export async function getCompany(recordID) {
  return await client.collection("companies").getOne(recordID);
}

// auth user
export async function authUser(data) {
  return await client
    .collection("users")
    .authWithPassword(data.username, data.password);
}

// authAdmin
export async function authAdmin(data) {
  return await client.admins.authWithPassword(data.email, data.password);
}

// get Modules
export async function getModules() {
  return await client.collection("modules").getFullList({
    expand: "category",
  });
}

// get tranding module
export async function getTrandingModules() {
  return await client.collection("modules").getList(1, 3, {
    expand: "category",
    filter: 'level = "level-2" && active = true',
    sort: "-views",
  });
}

// get one module
export async function getModuleById(recordID) {
  return await client.collection("modules").getOne(recordID, {
    expand: "parent, category",
  });
}

// getModule type by id
export async function getModuleTypeByID(Id) {
  return await client.collection("module_types").getOne(Id, {
    expand: "type, parent",
    filter: "isActive = true",
  });
}

// get modules by type
export async function getModuleByType(typeID) {
  return await client.collection("modules").getList(1, 200, {
    filter: 'parent = "' + typeID + '" && isActive = true',
    expand: "parent, type",
  });
}

// get module types
export async function getModuleType() {
  return await client.collection("module_types").getFullList({
    sort: "-created",
  });
}

// get statics
export async function getStatics() {
  return await client.collection("statics").getFullList();
}

// get testimonials
export async function getTestimonials() {
  return await client
    .collection("testimonials")
    .getFullList({ filter: "active = true" });
}


// get bucket
export async function getBucketByParent(typeID) {
  return await client.collection("question_bucket").getList(1, 200, {
    filter: 'parent = "' + typeID + '" && is_active = true',
    expand: "parent, type",
  });
}

// get bucket by module
export async function getBucketByModule(moduleID) {
  return await client.collection("bucket").getList(1,200, {
    filter: 'module = "'+moduleID+'" && active = true'
  })
 }

// get questions
export async function getQuestionByBucketID(bucketID) {
  return await client.collection("questions").getList(1, 200, {
    filter: 'bucket = "' + bucketID + '"',
    expand: "bucket",
    sort : "order"
  });
}



// add view