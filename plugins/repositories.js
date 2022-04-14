import createRepository from '~/repositories/index';

export default (context, inject) => {
  const repositories = createRepository(context.$axios);
  inject('repositories', repositories);
}
