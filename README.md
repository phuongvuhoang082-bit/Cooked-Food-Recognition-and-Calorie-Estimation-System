# Cooked Food Recognition and Calorie Estimation System

> Estimate the nutritional value of a meal from a single photo.

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)
[![YOLOv8](https://img.shields.io/badge/Model-YOLOv8-blueviolet?style=flat)](https://github.com/ultralytics/ultralytics)
[![PyTorch](https://img.shields.io/badge/Framework-PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-Computer%20Vision-5C3EE8?style=flat&logo=opencv&logoColor=white)](https://opencv.org/)
[![Streamlit](https://img.shields.io/badge/UI-Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white)](https://streamlit.io/)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=flat)]()
[![University](https://img.shields.io/badge/USTH-Group%20Project-00457C?style=flat)](https://usth.edu.vn/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Group Project for **Bachelor in Information and Communication Technology / Data Science**, University of Science and Technology of Hanoi (USTH), Academic Year 2026-2027.

## 📋 Table of Contents
- [1. Description](#1-description)
- [2. Features](#2-features)
- [3. Expected Outcomes](#3-expected-outcomes)
- [4. Workflow](#4-workflow)
- [5. Tech Stack](#5-tech-stack)
- [6. Project Structure](#6-project-structure)
- [7. Installation](#7-installation)
- [8. Usage & Demo Preview](#8-usage--demo-preview)
- [9. Model & Evaluation](#9-model--evaluation)
- [10. Nutrition Database](#10-nutrition-database)
- [11. Roadmap & Milestones](#11-roadmap--milestones)
- [12. Team](#12-team)
- [13. License](#13-license)

## 1. Description

The **Cooked Food Recognition and Calorie Estimation System** helps users estimate the nutritional value of their meals directly from food images. The system combines modern computer vision with nutritional database mapping to eliminate the tedious effort of manual food logging.

Because the exact mass and density of food cannot be reliably calculated from a single 2D image without 3D depth sensors, the system predicts visual food boundaries and provides an initial portion estimation. Users can easily verify and fine-tune the portions using simple categories: **Small / Medium / Large**.

> **Architecture Philosophy:** The system prioritizes a clean, lightweight, and cohesive implementation to demonstrate the complete computer vision and nutritional pipeline effectively, avoiding the unnecessary overhead of complex distributed cloud microservices.

## 2. Features

- **Food Detection and Multi-class Recognition:** Powered by YOLO to detect and classify multiple food items within a single plate/meal image, handling common variations in lighting, background, and camera angles.
- **Portion & Calorie Estimation:** Initial automatic portion estimate combined with user-friendly adjustment controls (**Small**, **Medium**, **Large**) based on standardized serving sizes.
- **Nutritional Value Mapping:** Automatically maps detected categories to calorie counts and macronutrient profiles (protein, carbs, fat).
- **Interactive Demo Application:** Clean, intuitive interface allowing users to upload or snap photos, review predictions, adjust servings, and get real-time calorie summaries.

## 3. Expected Outcomes

Directly aligned with the project proposal, this project delivers four tangible core outcomes:

1. **Food Recognition Model:** A fine-tuned deep learning object detection model (YOLOv8) capable of accurately detecting and classifying multiple common food items in a single meal image, evaluated using standard metrics (**Precision**, **Recall**, and **mAP**).
2. **Portion and Calorie Estimation Module:** A practical estimation pipeline that combines bounding-box visual cues with user-adjusted portion sizes (**Small / Medium / Large**) to estimate caloric and macronutrient contents (protein, carbs, fat).
3. **Nutrition Information System:** A standardized mapping module connecting recognized food classes to reference food databases (**USDA FoodData Central** and the **Vietnamese Food Composition Table**).
4. **Demonstration Application:** An interactive, lightweight application providing an end-to-end user workflow: capture/upload image $\rightarrow$ automated food detection $\rightarrow$ portion adjustment $\rightarrow$ real-time nutritional breakdown.

## 4. Workflow

flowchart LR
    A[Upload Meal Image] --> B[YOLO Detection & Classification]
    B --> C[Propose Portion Sizes]
    C --> D[User Verification / Adjustment]
    D --> E[Nutrition Database Lookup]
    E --> F[Total Calories & Macros Display]

1. **Input:** User uploads or captures an image of a meal.
2. **Object Detection:** YOLO model detects bounding boxes and classifies each food item.
3. **Portion Suggestion:** System estimates bounding box proportion and proposes a portion tier (*Small / Medium / Large*).
4. **User Review:** The user can review the detected labels and adjust the portion if desired.
5. **Nutrition Mapping:** Queries the nutritional database using the food label and portion weight.
6. **Output:** Real-time summary displaying total calories, protein, carbohydrates, and fats.

## 5. Tech Stack

| Component | Technology | Description |
| **Language** | Python 3.10+ | Core development language |
| **Object Detection** | YOLOv8 (Ultralytics) | Food bounding box detection & multi-label classification |
| **Deep Learning** | PyTorch | Model fine-tuning, training, and inference |
| **Image Processing** | OpenCV, Pillow | Image preprocessing and augmentations (rotation, scaling, brightness) |
| **Data Handling** | Pandas, NumPy | Nutrition dataset mapping and metric calculations |
| **User Interface** | Streamlit / Flask | Interactive web-based prototype application |
| **Nutrition Data** | USDA FoodData Central & VN Food DB | Standardized reference database for nutritional values |

## 6. Project Structure
├── data/
│   ├── raw/                  # Original meal images and datasets
│   ├── processed/            # Preprocessed images and YOLO annotation labels
│   └── nutrition_db.csv      # Standardized nutrition mapping table
├── models/
│   ├── yolov8_best.pt        # Trained/fine-tuned model weights
│   └── export/               # Exported model files (ONNX, etc.)
├── notebooks/
│   ├── 01_eda_and_prep.ipynb # Data exploration & preparation
│   └── 02_training.ipynb     # Model training and fine-tuning
├── src/
│   ├── detection.py          # YOLO inference and prediction pipeline
│   ├── estimation.py         # Portion sizing and calorie calculation logic
│   └── nutrition.py          # Database lookup and query utilities
├── app.py                    # Main web demo application (Streamlit / Flask)
├── requirements.txt          # Python dependencies
├── README.md                 # Project documentation
└── LICENSE                   # MIT License


## 7. Installation

### Prerequisites
- Python >= 3.10
- Git
- (Optional) CUDA-compatible GPU for accelerated training and inference

### Setup Steps

1. **Clone the repository:**
   git clone https://github.com/your-username/food-calorie-estimation.git
   cd food-calorie-estimation


2. **Create and activate a virtual environment:**
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # Linux / macOS
   python3 -m venv venv
   source venv/bin/activate


3. **Install dependencies:**
   pip install --upgrade pip
   pip install -r requirements.txt


## 8. Usage & Demo Preview

### 8.1 Running the Interactive Web Application

Launch the local web demonstration:

# If using Streamlit
streamlit run app.py

# Or if using Flask backend
python app.py

Open your browser and navigate to `http://localhost:8501` (for Streamlit) or `http://127.0.0.1:5000` (for Flask).

### 8.2 Command-Line Inference (CLI)

You can also run direct prediction on any meal image without launching the UI:

python src/detection.py --source data/raw/sample_meal.jpg --weights models/yolov8_best.pt --conf 0.4


### 8.3 Interface Walkthrough & Visual Mockup

Below is the user interaction flow implemented in the demonstration interface:

+---------------------------------------------------------------------------------+
|               Cooked Food Recognition & Calorie Estimation System               |
+---------------------------------------------------------------------------------+
| [ Upload Meal Image / Take Photo ]  --> Current file: "lunch_tray_01.jpg"       |
+---------------------------------------+-----------------------------------------+
|  Detected Food Items (YOLOv8)         |  Nutrition & Portion Adjustment         |
|  +---------------------------------+  |                                         |
|  | [steamed_rice: 0.94]            |  |  1. Cơm trắng (Steamed Rice)            |
|  | +---------------------------+   |  |     Portion: [ Small | (Medium) | Large]|
|  | | [Plate 1: Steamed Rice]   |   |  |     Serving: 150g -> 195 kcal           |
|  | +---------------------------+   |  |                                         |
|  |                                 |  |  2. Thịt kho tàu (Braised Pork)         |
|  | [braised_pork: 0.89]            |  |     Portion: [ Small | Medium | (Large)]|
|  | +---------------+               |  |     Serving: 180g -> 390 kcal           |
|  | | [Braised Pork]|               |  |                                         |
|  | +---------------+               |  |  3. Rau luộc (Boiled Greens)            |
|  |                                 |  |     Portion: [ (Small) | Medium | Large]|
|  | [boiled_greens: 0.91]           |  |     Serving: 60g  -> 20 kcal            |
|  | +---------------+               |  |-----------------------------------------|
|  | | [Boiled Greens]               |  |  TOTAL NUTRITION SUMMARY                |
|  | +---------------+               |  |  Calories: 605 kcal                     |
|  |                                 |  |  Protein:  34g  | Carbs: 48g | Fat: 24g |
|  +---------------------------------+  +-----------------------------------------+
+---------------------------------------------------------------------------------+

> *(Screenshots and recorded video demonstrations will be added to `docs/assets/` once the final UI build is published).*


## 9. Model & Evaluation

### 9.1 Dataset & Target Food Classes

To ensure the system works reliably in practical everyday scenarios (such as student canteens, home cooking, and office lunches), the initial training phase focuses on **15 core cooked food categories** frequently present in standard meals:

| ID | Class Label | Food Name (VI / EN) | Category | Std. Serving (g) | Reference Calories |
| `0` | `steamed_rice` | Cơm trắng / Steamed White Rice | Staple | 150g | ~195 kcal |
| `1` | `fried_egg` | Trứng chiên (ốp la) / Fried Egg | Protein | 60g | ~120 kcal |
| `2` | `boiled_egg` | Trứng luộc / Boiled Egg | Protein | 50g | ~78 kcal |
| `3` | `braised_pork` | Thịt kho tàu / Caramelized Braised Pork | Protein | 120g | ~260 kcal |
| `4` | `grilled_pork` | Thịt/Sườn nướng / Grilled Pork | Protein | 100g | ~245 kcal |
| `5` | `boiled_chicken` | Gà luộc / Boiled Chicken | Protein | 120g | ~198 kcal |
| `6` | `fried_chicken` | Gà rán (chiên) / Fried Chicken | Protein | 120g | ~290 kcal |
| `7` | `braised_fish` | Cá kho / Braised Fish | Protein | 120g | ~185 kcal |
| `8` | `fried_fish` | Cá rán (chiên) / Fried Fish | Protein | 120g | ~225 kcal |
| `9` | `tofu_tomato` | Đậu phụ sốt cà / Tofu in Tomato Sauce | Protein | 130g | ~150 kcal |
| `10` | `stir_fried_beef` | Bò xào / Stir-fried Beef with Veggies | Protein | 120g | ~215 kcal |
| `11` | `boiled_greens` | Rau luộc / Boiled Greens | Fiber | 100g | ~35 kcal |
| `12` | `stir_fried_greens`| Rau xào tỏi / Stir-fried Greens | Fiber | 100g | ~95 kcal |
| `13` | `vegetable_soup` | Canh rau thịt / Clear Vegetable Soup | Soup | 150g | ~45 kcal |
| `14` | `sour_soup` | Canh chua / Vietnamese Sour Soup | Soup | 150g | ~65 kcal |

#### Dataset Repositories & Reference Links

The training data and nutritional mapping reference the following open datasets and public authorities:

| Dataset / Resource | Description & Format | Link |

| **Roboflow Universe (Vietnamese Food)** | Pre-annotated bounding boxes for Vietnamese cooked dishes (YOLOv8 format) | [Roboflow Universe](https://universe.roboflow.com/search?q=vietnamese+food) |
| **Google Research Nutrition5k** | 5,000+ scanned meal plates with ground-truth calorie, protein, carbs & fat metadata | [GitHub Repository](https://github.com/google-research-datasets/Nutrition5k) |
| **ETH Zurich Food-101** | Benchmark computer vision dataset with 101,000 images across 101 food classes | [Official Dataset](https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/) \| [Kaggle](https://www.kaggle.com/datasets/dansbecker/food-101) |
| **USDA FoodData Central** | Standard reference nutritional values for food ingredients and raw foods | [USDA FoodData Central](https://fdc.nal.usda.gov/) |
| **Viện Dinh Dưỡng Quốc Gia (NIN)** | Bảng thành phần thực phẩm Việt Nam (Vietnamese Food Composition Table) | [viendinhduong.vn](http://viendinhduong.vn/) |
| **Group 7 Custom Curated Dataset** | Annotated YOLOv8 dataset specifically collected for student meals & canteen dishes | *[Roboflow Workspace / Google Drive link to be pinned]* |

* **Data Collection Strategy:** Aggregated from public benchmark repositories supplemented by custom high-resolution meal photos collected across varied canteen lighting, camera angles, and plate styles.
* **Annotation Format:** Standard YOLO bounding box format (`<class_id> <x_center> <y_center> <width> <height>` normalized to $[0, 1]$).
* **Dataset Splitting:** 70% Train, 15% Validation, 15% Test.

### 9.2 Evaluation Metrics & Benchmarks

The object detection model is fine-tuned on the dataset above and evaluated using standard object detection metrics:

| Metric | Target / Score | Notes |
| **Precision** | *In Progress* | Accuracy of detected food items |
| **Recall** | *In Progress* | Ratio of ground-truth foods detected |
| **mAP@50** | *In Progress* | Mean Average Precision at IoU = 0.50 |
| **mAP@50-95** | *In Progress* | Primary benchmark metric across IoU thresholds |


## 10. Nutrition Database

Nutritional values (Calories, Protein, Carbohydrates, Fat) are referenced from the **USDA FoodData Central** and the **Vietnamese Food Composition Table (Viện Dinh dưỡng Quốc gia)** combined with localized standard portion sizes:

- **Small:** ~0.5 standard serving size (e.g. 100g)
- **Medium:** 1.0 standard serving size (e.g. 200g)
- **Large:** ~1.5 - 2.0 standard serving size (e.g. 350g+)


## 11. Roadmap & Milestones

The project is structured into 5 iterative phases across the academic semester:

| Phase | Timeline | Key Tasks & Milestones | Status |
| **Phase 1** | Weeks 1 - 4 | • Finalize project topic proposal & technical specifications<br>• Define 15 target cooked food classes and nutrition database schemas<br>• Collect raw meal images and setup labeling standards (Roboflow / LabelImg) |  **Completed** |
| **Phase 2** | Weeks 5 - 8 | • Image preprocessing & data augmentation pipeline (OpenCV)<br>• Train and fine-tune YOLOv8 models (nano/small variants)<br>• Hyperparameter optimization & benchmark evaluation ($mAP$, Precision, Recall)<br>• Export optimized model checkpoints (ONNX / TorchScript) | 🟡 **In Progress** |
| **Phase 3** | Weeks 9 - 11 | • Implement 2D bounding-box area heuristics for portion sizing (S / M / L)<br>• Integrate USDA & Vietnamese Food Composition nutritional tables<br>• Build automated calculation pipeline connecting detected foods to calories & macros | ⚪ **Planned** |
| **Phase 4** | Weeks 12 - 14 | • Develop interactive demonstration application (Streamlit / Flask prototype)<br>• Implement live bounding-box visualization and instant portion adjustment UI<br>• End-to-end integration testing with varied real-world meal scenarios | ⚪ **Planned** |
| **Phase 5** | Weeks 15 - 16 | • System performance tuning, latency profiling, and error-case handling<br>• Finalize comprehensive project report and complete source code documentation<br>• Prepare slide presentation and live demonstration for the USTH defense jury | ⚪ **Planned** |


## 12. Team

**Group 7 - USTH (Academic Year 2026-2027)**

| Full Name | Student ID | Major | Role & Core Responsibilities |
|---|---|:---:|---|
| **Vũ Hoàng Phương** | 2410808 | **ICT** | **Team Leader / System Architect:** Project management, overall system architecture, API specification, and end-to-end integration between AI modules and application. |
| **Hoàng Hải Minh** | 2410586 | **ICT** | **Frontend Application Developer:** Design and implementation of the interactive user interface (Streamlit / Web App), meal image upload, bounding-box overlays, and nutrient summary dashboard. |
| **Lê Đức Minh** | 2410588 | **ICT** | **Backend & Service Pipeline Engineer:** Backend API development (FastAPI / Flask), request routing, image ingestion pipeline, and database query service integration. |
| **Lê Minh Quang** | 2410814 | **DS** | **Deep Learning / Model Lead:** YOLOv8 model architecture selection, fine-tuning, hyperparameter optimization, and benchmark evaluation ($mAP$, Precision, Recall). |
| **Trần Minh Tuấn** | 2411009 | **DS** | **Data Engineer & Augmentation:** Dataset curation (15 food classes), annotation management (Roboflow / LabelImg), image preprocessing, and data augmentation pipeline. |
| **Trịnh Hữu Minh** | 2410654 | **DS** | **Portion & Estimation Algorithms:** Bounding box relative area heuristic for portion estimation (Small / Medium / Large) and caloric/macro calculation formulas. |
| **Nguyễn Hữu Hoàng Minh** | 2410622 | **DS** | **Nutrition Intelligence & Mapping:** Construction and cleaning of the standardized nutrition database (USDA & Vietnamese Food Composition Table), food class nutrient mapping. |

* **Supervisor:** *Faculty of ICT / Department of Data Science, USTH*

## 13. License

This project is licensed under the [MIT License](LICENSE) - feel free to use and adapt it for academic and non-commercial purposes.
