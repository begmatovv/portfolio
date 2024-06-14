const projects = [
  {
    title: "Comfy Store",
    githubLink: "https://github.com/begmatovv/4-dars-bao",
    vercelLink: "https://4-dars-bao.vercel.app/",
  },
  {
    title: "My Kitchen",
    githubLink: "https://github.com/begmatovv/imtihon-6-oy",
    vercelLink: "https://imtihon-6-oy.vercel.app/",
  },
  {
    title: "Password",
    githubLink: "https://github.com/begmatovv/password",
    vercelLink: "https://password-bao.vercel.app/",
  },
  {
    title: "Shop",
    githubLink: "https://github.com/begmatovv/4-dars-ts",
    vercelLink: "https://4-dars-ts.vercel.app/",
  },
  {
    title: "Sneaker Shop",
    githubLink: "https://github.com/begmatovv/amaliyot-7oy-bao",
    vercelLink: "https://amaliyot-7oyy.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
