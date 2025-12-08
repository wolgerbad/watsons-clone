export default function useOpen() {
  const isOpen = useState('isOpen', () => false);

  function toggleOpen() {
    isOpen.value = !isOpen.value;
  }

  return { isOpen, toggleOpen };
}
