const composeCommand = (command: string | string[]): string => {
  if (typeof command === 'string') {
      return command;
  }

  return command.join(' ');
};
