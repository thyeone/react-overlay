# react-overlay

React에서 Overlay를 사용할 때 필요한 컴포넌트와 hook이 구현된 라이브러리입니다.

## Getting Started

```sh
npm install @thyeone/react-overlay

```

### Peer dependencies

```sh
npm i react react-dom framer-motion
```

## Usage

```tsx
const Example = () => {
  const { open } = useOverlay();
  return (
    <OverlayProvider>
      <button
        onClick={() =>
          open(({ isOpen, exit }) => (
            <MyBottomSheet isOpen={isOpen} onClose={exit}>
              Bottom Sheet
            </MyBottomSheet>
          ))
        }
      >
        Overlay Button
      </button>
    </OverlayProvider>
  );
};

export default Example;

const MyBottomSheet = ({ isOpen, onClose }) => {
  return (
    <AnimatePortal isOpen={isOpen}>
      <BottomSheet>
        <button onClick={onClose}>Close</button>
        Here Is Bottom Sheet Content
      </BottomSheet>
    </AnimatePortal>
  );
};

export default Example;
```

## Components

`OverlayProvider`

Overlay를 사용하기 위한 Provider입니다. 루트 컴포넌트에 `<OverlayProvider />`를 감싸주세요.

`Portal`

children props를 `createPortal`를 통해 바깥 DOM 노드로 렌더링합니다.

`AnimatePortal`

언마운트 될 경우 exit 애니메이션을 적용하기 위해 `<AnimatePresence/>` 와 결합된 컴포넌트입니다.

`BottomSheet`

마운트 될 때 올라오는 애니메이션이, 언마운트 될 때 내려가는 애니메이션이 적용되어 있습니다.
현재 `max-width: 430px` 인 제한적인 상황에서만 적용됩니다.

#### Props

| Name       | Required     | Type                         |
| ---------- | ------------ | ---------------------------- |
| `children` | **required** | React.ReactNode              |
| `isOpen`   | **required** | boolean                      |
| `ref`      |              | ForwardedRef<HTMLDivElement> |

## hooks

`useOverlay`

Overlay를 선언적으로 사용하기 위한 훅입니다. (Follow the [Usage](#Usage))
