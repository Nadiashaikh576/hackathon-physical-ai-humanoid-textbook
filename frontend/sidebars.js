// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1_ros2-nervous-system/intro',
        'module-1_ros2-nervous-system/chapter-1-ros2-fundamentals',
        'module-1_ros2-nervous-system/chapter-2-ros2-communication',
        'module-1_ros2-nervous-system/chapter-3-ai-to-robot-bridge',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2_digital-twin-sim/intro',
        'module-2_digital-twin-sim/chapter1-digital-twins-gazebo',
        'module-2_digital-twin-sim/chapter2-high-fidelity-unity',
        'module-2_digital-twin-sim/chapter3-sensor-simulation',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module-3-isaac-robot-brain/index',
        {
          type: 'category',
          label: 'Chapter 1: Isaac Sim — Perception & Synthetic Worlds',
          items: [
            'module-3-isaac-robot-brain/chapter-1-isaac-sim/index',
            'module-3-isaac-robot-brain/chapter-1-isaac-sim/perception',
            'module-3-isaac-robot-brain/chapter-1-isaac-sim/synthetic-worlds',
            'module-3-isaac-robot-brain/chapter-1-isaac-sim/synthetic-data',
            'module-3-isaac-robot-brain/chapter-1-isaac-sim/domain-randomization',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Isaac ROS — Visual SLAM & Navigation',
          items: [
            'module-3-isaac-robot-brain/chapter-2-isaac-ros/index',
            'module-3-isaac-robot-brain/chapter-2-isaac-ros/vslam-concepts',
            'module-3-isaac-robot-brain/chapter-2-isaac-ros/hardware-acceleration',
            'module-3-isaac-robot-brain/chapter-2-isaac-ros/localization-mapping',
            'module-3-isaac-robot-brain/chapter-2-isaac-ros/ros-integration',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 3: Nav2 — Path Planning for Humanoid Robots',
          items: [
            'module-3-isaac-robot-brain/chapter-3-nav2/index',
            'module-3-isaac-robot-brain/chapter-3-nav2/path-planning',
            'module-3-isaac-robot-brain/chapter-3-nav2/obstacle-avoidance',
            'module-3-isaac-robot-brain/chapter-3-nav2/navigation-stacks',
            'module-3-isaac-robot-brain/chapter-3-nav2/humanoid-movement',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA) Humanoid Intelligence',
      items: [
        'module-4-vla-humanoid-intelligence/index',
        {
          type: 'category',
          label: 'Chapter 1: Voice-to-Action — Speech as Robot Input',
          items: [
            'module-4-vla-humanoid-intelligence/chapter-1-voice-to-action/index',
            'module-4-vla-humanoid-intelligence/chapter-1-voice-to-action/voice-natural-interface',
            'module-4-vla-humanoid-intelligence/chapter-1-voice-to-action/speech-to-text',
            'module-4-vla-humanoid-intelligence/chapter-1-voice-to-action/commands-to-intent',
            'module-4-vla-humanoid-intelligence/chapter-1-voice-to-action/ros2-integration',
            'module-4-vla-humanoid-intelligence/chapter-1-voice-to-action/limitations-latency',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 2: Cognitive Planning with LLMs',
          items: [
            'module-4-vla-humanoid-intelligence/chapter-2-cognitive-planning/index',
            'module-4-vla-humanoid-intelligence/chapter-2-cognitive-planning/llm-reasoning',
            'module-4-vla-humanoid-intelligence/chapter-2-cognitive-planning/language-to-actions',
            'module-4-vla-humanoid-intelligence/chapter-2-cognitive-planning/task-decomposition',
            'module-4-vla-humanoid-intelligence/chapter-2-cognitive-planning/error-handling',
            'module-4-vla-humanoid-intelligence/chapter-2-cognitive-planning/safety-controllability',
          ],
        },
        {
          type: 'category',
          label: 'Chapter 3: Capstone — The Autonomous Humanoid',
          items: [
            'module-4-vla-humanoid-intelligence/chapter-3-autonomous-humanoid/index',
            'module-4-vla-humanoid-intelligence/chapter-3-autonomous-humanoid/end-to-end-pipeline',
            'module-4-vla-humanoid-intelligence/chapter-3-autonomous-humanoid/perception-planning-navigation-manipulation',
            'module-4-vla-humanoid-intelligence/chapter-3-autonomous-humanoid/object-identification',
            'module-4-vla-humanoid-intelligence/chapter-3-autonomous-humanoid/multi-step-tasks',
            'module-4-vla-humanoid-intelligence/chapter-3-autonomous-humanoid/module-integration',
          ],
        },
      ],
    },
  ],
};

export default sidebars;