---
title: RHYACTION LIVE
period: 2022년 9월 - 현재
team: 개인
stack: [C#, FMOD, Unity]
description: 음악에 맟춰 떨어지는 노트를 맞추는 전통적인 리듬 게임입니다.
repo: https://github.com/cyan4s/rhyaction-live
tag: [게임, 리듬]
platform: [Windows]
heroImage: ../../assets/portfolio/rhyaction-live/rllogo.png
periodDetail: { "v0.1": ["2022/09", "2023/02"] }
---

![게임 플레이 스크린샷](../../assets/portfolio/rhyaction-live/ss.jpg)

게임 플레이 스크린샷

🎵 **Unity 및 FMOD** 기반의 오픈소스 리듬게임으로, 전통적인 **노트 낙하형 리듬게임**입니다. 상업용 리듬게임 수준의 품질을 목표로 개발이 진행되고 있습니다.

## 링크

- **다운로드 링크** — [https://github.com/CYAN4S/rhyaction-live/releases](https://github.com/CYAN4S/rhyaction-live/releases)
- **GitHub 저장소** — [https://github.com/CYAN4S/rhyaction-live](https://github.com/CYAN4S/rhyaction-live)
- **v0.1 공개 트레일러 영상** — [https://vimeo.com/800463242](https://vimeo.com/800463242)

## 소개

저만의 리듬게임을 만들고 싶어 시작하게 된 프로젝트입니다. 프로그래밍부터 그래픽, 오디오, 애니메이션 등의 게임 개발 전반을 혼자서 수행하였습니다.(일부는 상용 에셋을 사용하였으나, 빠른 시일 내로 자체 리소스 교체될 예정입니다.)

현재 v0.1을 공개했으며, 목표는 상업용 리듬게임에서 볼 수 있는 기능들을 모두 구현하는 것입니다.

## 주요 기능

### 인게임

- 채보 파일 및 오디오 파일을 불러와 플레이할 수 있습니다.
- 게임 내에서 스크롤 속도 조절 및 일시정지가 가능합니다.
- FMOD를 사용하며, 오디오 출력 장치 및 버퍼 크기를 설정할 수 있습니다.

### 채보 에디터

![Untitled.png](../../assets/portfolio/rhyaction-live/editor.png)

_개발 중이며, 아직 빌드에 포함되어 있지 않았습니다._

- 곡 및 채보 파일을 불러오고, 저장할 수 있습니다.
- 채보의 버튼 모드 및 BPM을 변경할 수 있습니다.
- 편리한 노트 배치를 위해 스냅 기능이 있으며, 스냅 단위를 정할 수 있습니다.

## 그래픽 디자인

![선곡 화면 컨셉 아트 (**실제 게임 화면이 아닙니다**)](../../assets/portfolio/rhyaction-live/select-concept.png)

선곡 화면 컨셉 아트 (**실제 게임 화면이 아닙니다**)

전체적으로 공상과학 느낌의 HUD 디자인에서 영감을 받은 디자인입니다.

사용자 친화적인 UI/UX를 설계하기 위해 노력하였습니다. 해당 컨셉 아트 내 선곡 화면의 경우, "곡 선택 → 곡 정보 확인 → 버튼 선택 → 난이도 선택 → 게임 설정 → 시작" 흐름이 자연스럽게 동선을 설계하였습니다.

**Affinity Designer**

로고 및 게임 내 그래픽 요소를 디자인하였습니다.

게임의 UI/UX 프로토타입 및 컨셉 아트를 제작하였습니다.

**Blender, Davinci Resolve**

배경이 되는 VJ Loop 영상을 제작하였습니다.

트레일러 영상을 제작하였습니다.

**Unity Animation**

그래픽 리소스를 애니메이팅하여, 게임 내에서 활용하였습니다.

## 프로그래밍

Unity 및 C#으로 개발되고 있으며, 프로젝트가 오픈소스로 공개되어 있습니다.

프로젝트를 최대한 확장이 용이하고 유지보수가 원활히 이루어질 수 있도록, 주기적인 리팩토링을 수행하고 있습니다.

### 자료 구조

**_큐 (작성 중)_**

한 라인은 한 큐에 대응합니다.

하나의 라인에 대응되는 입력이 수행되었을 때, 라인에 해당하는 노트 중 시간 순으로 가장 낮은 노트를 선택해야 하며, 노트들은 항상 시간 순서대로 호출됩니다.

```csharp

```

1. 채보 파일 데이터를 활용해, 노트들을 생성합니다.
   - 노트는 NoteSystem(혹은 상속받은 클래스) 컴포넌트를 가진 GameObject입니다.
2. 라인 수 만큼 리스트의 크기를 조절합니다.
   - 리스트의 형식은 List<Queue<NoteSystem>>입니다.
3. 같은 라인의 노트끼리 모아, 노트의 시간을 기준으로 오름차순으로 정렬합니다.
4. 각 노트 모음을 라인 값을 인덱스로 삼아, 리스트 내 큐에 순서대로 삽입합니다.
5. 게임 내에서 입력이 들어올 때, 입력에 해당하는 라인 큐에서 노트를 Dequeue합니다.
   - 이 과정에서 큐가 비었는지를 미리 확인합니다.

**_딕셔너리 (작성 중)_**

같은 라인에 같은 타이밍에 노트가 중복으로 존재하면 안 됩니다.

에디터에서 노트를 중복으로 배치하는 것을 막기 위해 딕셔너리를 활용합니다.

### 디자인 패턴

특정 상황에 맞는 문제를 디자인 패턴을 이용해 해결하였으며, 학습에 [이 문서](https://resources.unity.com/games/level-up-your-code-with-game-programming-patterns)를 적극 활용하였습니다.

**상태 패턴**

- 문제: 게임 내엔 여러 상태들이 존재하고, 상태에 맞게 객체들의 상황이 달라져야 한다.
  - 예시: 일반적으로 입력이 들어오면 노트를 처리하지만, 일시정지 시에는 입력을 받지 아니하며, 일시정지 해제 후 3초 카운트다운에는 입력에 따라 노트를 처리하나 일반적인 방법과는 상이하게 처리한다.
- 해결: 상태 패턴을 사용하여, 객체의 행동을 게임의 현재 상태에 알맞게 설정할 수 있었습니다.

```csharp
// Write in progress...
```

특히, 일시정지 시 롱 노트를 처리하는 로직을 구현하는데 크게 이점이 되었습니다.

```csharp
// Write in progress...
```

**옵서버 패턴**

대부분의 객체 간 데이터 통신을 event를 이용해

이를 통해 객체 간 의존도를 줄이고,

`UnityAction`이라는 Unity의 옵서버 패턴 구현체는, UI 요소를 연결하는 등의 이벤트 관리를 코드 수정 없이 Unity 에디터 내에서 가능하게 합니다.

**싱글톤 패턴**

Scene 사이 데이터 전달 또는 매니저 역할을 담당하는 객체에만 사용하였습니다.

- 사용 예시
  - AudioManager: 오디오 매니저에서 오디오에 관련된 설정을 담으며, 이는 게임 전역에 활용됩니다.
  - Selected: 선택 Scene에서 선택한 채보 데이터를 Ingame Scene으로 전달합니다.
- 사용을 제한한 이유는, 싱글톤의 문제로 알려진 구조의 난잡화를 방지하기 위함입니다.
- `DontDestoryOnLoad` 기능을 함께 사용하여 Scene 전환 시 객체가 파괴되지 않으며, 이로 Scene 간 데이터 전달을 구현하였습니다.

**팩토리 메서드 패턴**

채보 파일로부터 게임 내 채보 데이터를 생성할 때 사용하였습니다.

채보 파일의 파일 구조가 변경될 경우를 대비할 수 있게 되었습니다.

_오브젝트 풀 (작업 중)_

### 아키텍쳐 패턴

_MVP(Mocel-View-Presenter) (작업 중)_

_Input Manager (작성 중)_

입력을 처리하는 파트를 분리하여

5개의 라인을 가지는 5B 모드는 가장 중간의 라인이 2개의 키에 대응됩니다. 하나의 키를 누른 상태에서 다른 키를 누르면, 해당 라인을 뗐다 바로 누르는 것으로 인식해야 합니다.

InputManager 객체에서 해당 두 키의 입력를 별도로 관리하여, 게임 로직에서 이를 신경쓰지 않게 디커플링을 수행할 수 있었습니다.

## 사운드

**FMOD**

- Low-latency 오디오를 구성
- Core API 이용
  - 외부 오디오 파일 불러오기 및 재생
  - 게임 내에서 오디오 관련 옵션을 변경

**FL Studio**

게임 내 효과음을 제작하였습니다.

수록곡을 작곡하였습니다.

## 프로젝트 매니지먼트 및 플래닝

**GitHub Issues/Projects**

[Projects · rhyaction-live (github.com)](https://github.com/CYAN4S/rhyaction-live/projects?query=is%3Aopen)

정신 건강 이상 및 번아웃 증후군으로 인해, 개발이 크게 지연된 적이 있습니다.

Projects 기능을 활용하여, 구현하고자 하는 기능들을 목록화하였습니다. 또한 목록의 단일 항목을 Issues를 통해 구체화 및 문서화함으로서, 목표를 분명히 정하였습니다.

목표를 분명히 명시함으로서, 개발 의욕과 집중도를 높일 수 있었습니다.
